class FamilyTree {
  constructor (parent) {
    if(!parent){
      throw undefined
    }
    if(typeof parent === 'number'){
      throw undefined
    }
    this.value = parent,
    this.children = []

  }
  insert(child){
    let myChildren = new FamilyTree(child)
    this.children.push(myChildren)
    return this.children
  }
  familySize(){
    if(this.children.length === 0){
      return 1
    }
    else{
      let count = 0;
       count += this.value.split(' ').length + this.children.reduce((accum, element)=>{
       accum += element.value.split(' ').length
       return accum
      }, 0)
       return count
    }
  }
  findMember(member){
    let array = this.children.filter((element)=>{
      if(element.value === member){
        return element
      }
    })
 
    if(array.length === 0){
      return undefined
    }
    else{
      return array[0]
    }
   }
   log(){
    return `-- ${this.value}\n${this.children.map( element =>{
      return `---- ${element.value}\n${element.children.map(element =>{
       return `------ ${element.value}`
      }).join('\n')}`
    }).join('\n')}`
  }

}

module.exports = FamilyTree;
