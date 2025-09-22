const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg xl:col-span-2">Test1</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test2</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test3</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test4</div>
      <div className="bg-primary-foreground p-4 rounded-lg xl:col-span-2 ">Test5</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test6</div>
    </div>
  )
}

export default Homepage