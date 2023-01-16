import type { ReactNode } from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import s from './ItemsNewPage.module.scss'

type ItemKind = 'income' | 'expenses'
type TabItem = { key: ItemKind; text: string; element?: ReactNode }[]
export const ItemsNewPage: React.FC = () => {
  const tabItems: TabItem = [{ key: 'expenses', text: '支出' }, { key: 'income', text: '收入' }]
  const [tabItem, useTabItem] = useState<ItemKind>('expenses')
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
