import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

export function DeadlineTabs({ activeTab, onTabChange }) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full my-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="all">All Deadlines</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming Deadlines</TabsTrigger>
        <TabsTrigger value="expired">Expired Deadlines</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}