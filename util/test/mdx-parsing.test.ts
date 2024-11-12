import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import fs from 'fs'
import matter, { GrayMatterFile, Input } from 'gray-matter'
import { parsePost } from '../mdx-parsing'
import readingTime from 'reading-time'
// Mock the external modules
vi.mock('fs')
vi.mock('gray-matter')
vi.mock('reading-time')

const mockContent = `
---
title: Test Post
date: 2024-01-01
category: text
description: This is a test post
thumbnail: /images/post/diary/promise-test/ecbd2b60ec7ea4b44cbdbfeee980b8c9.jpg
---

This is the content of the test post.
`

const mockResult: GrayMatterFile<Input> = {
  data: {
    title: 'Test Post',
    date: '2024-01-01',
    tags: 'test',
    description: 'This is a test post',
    fileName: 'test-post',
    category: 'test-category',
    readingMinute: 2,
  },
  content: 'This is the content of the test post.',
  orig: '',
  language: 'ko',
  matter: '',
  stringify: (string) => string,
}

describe('mdx파싱 관련 유틸함수를 테스트합니다.', () => {
  describe('parsePost', () => {
    beforeEach(() => {
      vi.clearAllMocks()

      vi.mocked(fs.readFileSync).mockReturnValue(mockContent)

      vi.mocked(matter).mockReturnValue(mockResult)

      vi.mocked(readingTime).mockReturnValue({
        minutes: 1.8,
        text: '',
        time: 0,
        words: 0,
      })
    })

    afterEach(() => {
      vi.resetAllMocks()
    })

    it('포스트 파일을 올바르게 파싱해야 한다', async () => {
      const postPath = '/content/blog/test-category/test-post.mdx'
      const result = await parsePost(postPath)

      expect(result).toEqual({
        title: 'Test Post',
        date: '2024-01-01',
        tags: 'test',
        description: 'This is a test post',
        fileName: 'test-post',
        category: 'test-category',
        readingMinute: 2,
      })
    })

    it('gray-matter를 사용하여 frontmatter를 올바르게 파싱해야 한다', async () => {
      const postPath = '/content/blog/test-category/test-post.mdx'
      const post = await parsePost(postPath)

      expect(post).toEqual(mockResult.data)
    })

    it('읽기 시간을 계산하고 올림해야 한다', async () => {
      const postPath = '/content/blog/test-category/test-post.mdx'
      const result = await parsePost(postPath)

      expect(result.readingMinute).toBe(2) // 1.8이 2로 올림됨
    })

    it('파일 경로에서 카테고리를 올바르게 추출해야 한다', async () => {
      const postPath = '/content/blog/javascript/advanced-concepts.mdx'
      const result = await parsePost(postPath)

      expect(result.category).toBe('javascript')
    })

    it('파일 경로에서 확장자를 제외한 파일명을 올바르게 추출해야 한다', async () => {
      const postPath = '/content/blog/javascript/advanced-concepts.mdx'
      const result = await parsePost(postPath)

      expect(result.fileName).toBe('advanced-concepts')
    })

    it('파일을 읽을 수 없을 때 에러를 발생시켜야 한다', async () => {
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error('File not found')
      })

      const postPath = '/content/blog/test-category/non-existent.mdx'

      await expect(parsePost(postPath)).rejects.toThrow('File not found')
    })
  })
})
