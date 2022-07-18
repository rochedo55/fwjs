import {useState} from 'react'
import {Tab_view} from '../components/Tabs'

export default function useTabs(){
    const [tabs,setTabs] = useState<Tab_view[]>([])

    const createTabs = (qst: Tab_view) => {

        console.log(tabs.length)
        setTabs([...tabs, {id:tabs.length, title:qst.title,content:qst.content}])
      }
      return {tabs,createTabs}
}
