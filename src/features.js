function classNames(...args) {
    let finalClasses = [] 
    try {
      args.forEach((classObj, i) => {
        if(classObj !== null && (typeof classObj == 'string' || typeof classObj == 'object')) {
          if (typeof classObj == 'string') {
            finalClasses.push(classObj)
          } else if (typeof classObj == 'object') {
            for( let key in classObj) {
              if(classObj[key]) {
                finalClasses.push(key)
              }
            }
          }
        }else {
          throw new Error("element of classNames function isn`t correct")
        }
      })
       return finalClasses.join(' ')
    } catch(error) {
      console.log(error)
    }
  }
  
  export default classNames