export default (content) => {
    // Первое Задание
    const data = content.split('\n');
    const rows = data.slice(1).map((row) => row.split('|'));
    console.log(`Count: ${rows.length}`);

    // Второе Задание
    const strength = rows.map((row) => row[2]);

    const strongest = Number(strength)
    console.log(strongest);

}