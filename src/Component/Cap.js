//////////////////////////////////////////////////////////////////////////////////////
//////////////////    Thanks to Tlyler (This is Tylers Function)     /////////////////
//////////////////////////////////////////////////////////////////////////////////////
const capitalize = (input) => {                                                     //
    ///////// edited the code for my purposes ////////                              //
    let theInput = input.split("-");              ////                              //
    const theInputJoin = theInput.join(" ")       ////                              //
    let newInput = theInputJoin.split(' ');       ////                              //
    //////////////////////////////////////////////////                              //
    for(let i = 0; i < newInput.length; i++) {                                      //
        newInput[i] = newInput[i][0].toUpperCase() + newInput[i].substr(1);         //
    }                                                                               //
    return newInput.join(' ');                                                      //
}                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////
export default capitalize;