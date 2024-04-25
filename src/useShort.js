export const useShort = (name)=>{
    const words = name.split(" ");
    let temp = ""
    if(words.length > 1){
        temp = words[0][0] + words[words.length-1][0]
    }
    else{
        temp = words[0][0] + words[0][1]
    }
    return temp.toUpperCase();
}

// export default useShort;