import _ from 'lodash'

export default (content) => { 

    //  Первое задание
    const data = content.split('\n').slice(1); 
    console.log(`Количество рядов: ${data.length}`) 

    const make_hero = (content) => {
        const bobi = {race:content[0], stronge:parseInt(content[1]), health:content[2], division:parseInt(content[3]), hight:content[4], kg:parseInt(content[5]), price:content[6]}
        return bobi;
    };
         const rows = data.map((row) => row 
    .split('|') 
     .filter((row) => row)) 
    .map((array) => array  
        .map((element) => element.trim()) 
         ); 

    const jopa = rows.map((row) => make_hero(row));
    const jopa1 = jopa.map((row) => row.stronge);
    const jopa2 = Math.max(...jopa1);
    const jopa3 = jopa.filter((row) => row.stronge === jopa2);
    console.log(jopa3[0].price * 10);
    const jopa4 = jopa.filter((row) => row.stronge !== jopa2);
    const jopa5 = jopa4.map((row) => row.stronge);
    const jopa6 = Math.max(...jopa5);
    const jopa7 = jopa.filter((row) => row.stronge === jopa6)
    console.log(jopa7[0].price*20)

    const xui = jopa.map((row) => row.kg);
    const xui2 = Math.max(...xui);
    const xui3 = jopa.filter((row) => row.kg === xui2);
    const mintolstii = Math.min(...xui);
    const minkg = jopa.filter((row) => row.kg === mintolstii )
    console.log(xui3[0].price * xui3[0].division)
    console.log(minkg[0].price * minkg[0].division)


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