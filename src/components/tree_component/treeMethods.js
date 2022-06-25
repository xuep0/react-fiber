
const filterData = (data, clickMethod) => {
  if(data.constructor === Object && data.children) {
    // 判断条件开关锁
    return (<div key={data.key} >
        <div key={data.key}  >
        <span  className={data.children? 'isLeaf': 'unLeaf'} onClick={function(){clickMethod(data.key)}}/>
        <input type="checkbox"/>{data.title}
        </div>
        {data.flag && data.children.map(item =>{
           return filterData(item, clickMethod)
        })}
        </div>)
  }
      
    return <div key={data.key} className="drop_card">
            <span  className={data.children? 'isLeaf': 'unLeaf'} onClick={function(){clickMethod(data.key)}} />
            <input  type="checkbox"/>  
            {data.title}
            </div>
}

export {
    filterData
}