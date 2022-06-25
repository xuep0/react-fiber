import React,{Component,} from 'react';
import './treeStyle.css'
import {filterData} from './treeMethods.js'
export default class Tree extends Component {
  constructor(props){
      super();
      this.state = {
          treeData: []
      }
  }
  componentDidMount (){
    let newtreeData = this.getClose(this.props.treeData);
    this.setState({'treeData': newtreeData});
  }
  // 设置开关卡 -- 默认将所有数据关闭

  getClose(data) {
    data.map(element => {
          if(element.children){
              this.getClose(element.children)
          }
        return element['flag'] = false 
      });
     return data
  }
  
  // 点击切换数据

  changeFlag(data, key){
     data.forEach(element => {
       if(element.key === key) {
        element.flag = !element.flag
       }
     });
     return data
  }

  clickMethod =(opt)=>{
    let {treeData} = this.state;
     this.setState({
         'treeData': this.changeFlag(treeData, opt)
     })     
  }
  
  render (){
      const {treeData} = this.state;
      return (<div className='tree_box'>
        { treeData.length && treeData.map(element => {
           return filterData(element,this.clickMethod )
        })
        }
      </div>)
  }
}