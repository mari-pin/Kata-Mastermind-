describe('masterMind', ()=>{
    it('returns full red pins when all color are correct',()=>{
     //arrange
      const masterMind = new MasterMind();
      const secretPassword = ['red','red','red','red'];
      const guessedPasword = ['red','red','red','red']
     
      //act
        const play = masterMind.compare(guessedPasword,secretPassword)

     
        expect(play).toEqual(['redPin','redPin','redPin','redPin'])
    }) 
    it('returns no pins when all color are incorrect',()=>{
        //arrange
         const masterMind = new MasterMind();
         const secretPassword = ['red','red','red','red'];
         const guessedPasword = ['white','white','white','white']
        
         //act
           const play = masterMind.compare(guessedPasword, secretPassword)
   
        
           expect(play).toEqual([ ])
       }) 
})

class MasterMind{
    compare(guessedPasword, secret){
       const play = []
        for(let index in  guessedPasword){
           if (guessedPasword[index]=== secret[index]){
            play.push('redPin')
           }
        }
        return play
    }   
}