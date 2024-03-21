'use client'


const ItemPage = ({params:{item}}:{params:{item:string[]}}) => {
  const path =['',...item].join('/')
  console.log(path)
  return (
    <div>{path}</div>
  )
}

export default ItemPage
