const getDataFromJson = async () => {
    const res = await fetch('./p.json');
    const data = await res.json();
    console.log(data);
    return data;
}

const displayData = (data, ) => {
    const tableBody = document.querySelector('#tbody');
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.city}</td>
        `;
        tableBody.appendChild(row);
    });
}

const f1 = (data) => {
    temp = Array.from(data);
    console.log('feladat 1:');
    console.log(temp.sort((a, b) => a.name < b.name ? -1 : 1));
}

const f2 = (data) => {
    console.log('feladat 2:');
    console.log(data.filter((item) => item.age > 30));
}

const f3 = (data) => {
    console.log('feladat 3:');
    data.forEach((item) => console.log(`${item.name} (${item.age})`));
}

const f4 = (data) => {
    const list = document.querySelector('#alma');
    data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (${item.age})`;
        list.appendChild(li);
    });
}

const f5 = (data) => {
    const cities_display = document.querySelector('#city_show');
    console.log('feladat 5:');
    const cities = data.map((item) => item.city);
    const text_cities = cities.join(', ');
    cities_display.textContent = text_cities;
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getDataFromJson();
    console.log(data);
    f1(data);
    console.log(data);
    f2(data);
    f3(data);
    f4(data);
    f5(data);
    displayData(data);
});
