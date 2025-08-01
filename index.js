const bank = [];
const odd = [];
const even =[];

const addNumber=(num)=>{
  bank.push(num);
  render();
}

const sort1 = () =>{
    const num = bank.shift();
    if(num % 2 ===0){
     even.push(num);
    }else{
        odd.push(num);
    }
    render();
}

const sortAll = () =>{
    while(bank.length >0)
    sort1();

}


const InputForm = () => {
    const $inputForm = document.querySelector('.form');
    $inputForm.innerHTML = `
      <form>
        <label>Add a number to the bank</label>
        <input type="number" name="input" />
        <button name="add-number" value="add-number">Add Number</button>
        <button name="sort" value="sort">Sort 1</button>
        <button name="sort-all" value="sort-all">Sort All</button>
      </form>
    `;
    $inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const action = e.submitter.value;
      if (action === 'add-number') {
        addNumber(e.target.input.value);
      } else if (action === 'sort') {
        sort1(e.target.input.value);
      } else if (action === 'sort-all') {
        sortAll(e.target.input.value);
      } else {
        console.log('huh?');
      }
      console.log(action);
    });
  };



const render = () =>{
    const $app = document.querySelector('#app');

    $app.innerHTML = `
    <h1>Odd and Events</h1>
    <div class = "form"></div>  
      <div>
        <h2>Bank</h2>
        
        <div class="number-section">  ${bank.join(' ')}</div>
      
        </div>
        <div>
        <h2>Odd</h2>
        <div class="number-section">  ${odd.join(' ')}</div>
        </div> 
        <div>
        <h2>Evens</h2>
        <div class="number-section">  ${even.join(' ')}</div>
        </div>
      
    `;
    InputForm();
};
render();

