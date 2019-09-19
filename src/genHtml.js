const genHtml = (schedule) => schedule
    .map((day) => `
        <div>
            <h1>${day.id}</h1>
            
            <ul>
                ${day.subjects.map((subject) => `<li>${subject.title}</li>`).join('')}
            </ul>
        </div>
    `)
    .join('');

export default genHtml;