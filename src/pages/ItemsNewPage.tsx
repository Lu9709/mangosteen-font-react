import type { ReactNode } from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import { Tags } from './ItemNewPage/Tags'
import s from './ItemsNewPage.module.scss'

export const ItemsNewPage: React.FC = () => {
  const tabItems: { key: Item['kind']; text: string; element?: ReactNode }[] = [
    { key: 'expenses', text: '支出', element: <Tags kind='expenses' /> },
    { key: 'income', text: '收入', element: <Tags kind='income' /> }
  ]
  const [tabItem, useTabItem] = useState<Item['kind']>('expenses')
  return (
    <div className={s.wrapper}>
      <Gradient>
        <TopNav title="记一笔" icon={<Icon name="back" />} />
        <Tabs tabItems={tabItems} className="text-center" classPrefix='itemsNewPage'
          value={tabItem}
          onChange={(item) => { useTabItem(item) }}
        />
      </Gradient>
    </div>
  )
}
