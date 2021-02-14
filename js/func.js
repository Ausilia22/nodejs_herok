const av_salary = 3500;
document.getElementById("getSalary").addEventListener("click",zliczanie);

function zliczanie(e) {
    console.log(e)
    e.preventDefault();
    const salary = document.getElementById("salary").value
    if (salary >= av_salary )
    document.getElementById("result").innerText="Twoja pensja jest wieksza niż srednia"

else {
    document.getElementById("result").innerText="Zarabiasz mniej niż średnia"}
}