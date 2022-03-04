import { render } from '@testing-library/react'

import { Top } from '@/components/Top'

describe('Sampleコンポーネント', () => {
  test('should first', () => {
    const { getByText } = render(<Top />)
    expect(getByText('Nextjs+Jestのサンプルサプリ')).toBeTruthy()
    expect(getByText('設定がすごく楽になりました。')).toBeTruthy()
  })
})
