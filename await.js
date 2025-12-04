function  getUserDetails(id){
    return new Promise((resolve,reject)=>{
        resolve({userroll:"123"})
    });
};

const myfun=async()=>{
    console.log("Hii");
    const result1=await getUserDetails("123");
    console.log(result1);
    console.log("Bye");
}

myfun();