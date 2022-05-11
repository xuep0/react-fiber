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
        console.log(element, 5555)
          if(element.children){
              this.getClose(element.children)
          }
        return element['flag'] = false 
      });
      console.log(data, 7777)
     return data
  }
  
  // 点击切换数据

  changeFlag(data, key){
      data.length && data.map(element => {
        if(element.key !== key && element.children) {
            this.changeFlag(element.children, key)
        }
        if(element.key === key) return  element.flag = !element.flag
      })
      return data;
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