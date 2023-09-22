export default (content) => { 
    const data = content.split('\n').slice(1); 
    console.log(`Количество рядов существ: ${data.length}`) 
 
    const rows = data.map((row) => row 
    .split('|') 
    .filter((row) => row)) 
    .map((array) => array  
        .map((element) => element.trim()) 
        ); 
 
    const creatures = rows.map((row) => row[0]); 
    const price = rows.map((row) => Number(row[6])); 
 
 
    const strengths = rows.map((row) => Number(row[1])); 
    const strongestIndex = strengths.indexOf(Math.max(...strengths)); 
    const strengthsWithoutStrongest = strengths.slice(); 
    strengthsWithoutStrongest[strongestIndex] = 0; 
    const secondStrongestIndex = strengthsWithoutStrongest.indexOf(Math.max(...strengthsWithoutStrongest)); 
     
    console.log(`Цена за 10 сильнейших созданий: ${price[strongestIndex]*10}`); 
    console.log(`Цена за 20 вторых по силе созданий: ${price[secondStrongestIndex]*20}`); 
 

}