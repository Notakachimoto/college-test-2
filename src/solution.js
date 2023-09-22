import _ from 'lodash'

export default (content) => { 

    //  Первое задание
    const data = content.split('\n').slice(1); 
    console.log(`Количество рядов: ${data.length}`) 

    const make_hero = (content) => {
        const bobi = {race:content[0], stronge:parseInt(content[1]), health:content[2], division:content[3], hight:content[4], kg:content[5], price:content[6]}
        return bobi;
    };
         const rows = data.map((row) => row 
    .split('|') 
     .filter((row) => row)) 
    .map((array) => array  
        .map((element) => element.trim()) 
         ); 

    const jopa = rows.map((row) => make_hero(row));
    const jopa1 = jopa.map((row) => row.stronge)
    const jopa2 = Math.max(...jopa1)
    const jopa3 = jopa.filter((el) => el.stronge === jopa2)
    console.log(jopa3[0].price * 10)
    const jopa4 = jopa.filter((el) => el.stronge !== jopa2)
    const jopa7 = jopa4.map((el) => el.stronge)
    const jopa5 = Math.max(...jopa7)
    const jopa6 = jopa4.filter((el) => el.stronge === jopa5)
    console.log(jopa6[0].price * 20)

    // // Второе задание

    // const rows = data.map((row) => row 
    // .split('|') 
    // .filter((row) => row)) 
    // .map((array) => array  
    //     .map((element) => element.trim()) 
    //     ); 
 
    // const creatures = rows.map((row) => row[0]); 
    // const price = rows.map((row) => Number(row[6])); 
 
 
    // const strengths = rows.map((row) => Number(row[1])); 
    // const strongestIndex = strengths.indexOf(Math.max(...strengths)); 
    // const strengthsWithoutStrongest = strengths.slice(); 
    // strengthsWithoutStrongest[strongestIndex] = 0; 
    // const secondStrongestIndex = strengthsWithoutStrongest.indexOf(Math.max(...strengthsWithoutStrongest)); 
     
    // console.log(`цена за 10 сильнейших созданий: ${price[strongestIndex]*10}`); 
    // console.log(`цена за 20 вторых по силе созданий: ${price[secondStrongestIndex]*20}`);

    // // Третье задание

    // const unitsInDivision = rows.map((row) => row[3])
    // const averageWeight = rows.map((row) => Number(row[5]));
    // const fattestUnit = averageWeight.indexOf(Math.max(...averageWeight));
    // const fattesThinestUnit = averageWeight.indexOf(Math.min(...averageWeight));

    // console.log(`цена за отряд самых толстых: ${price[fattestUnit]}`);
    // console.log(`цена за отряд самых худых: ${}`);


}