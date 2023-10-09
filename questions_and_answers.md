<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
<i>Write answer is A: "{}"</i>
<i> <b>let greeting</b>: this line is just declares a variable using Let keyword. dont assigned a any value </i>
<i> <b>greetign = {}</b> The Line of codes means Assigned a empty object , We know that In JavaScript, {} represents an empty object literal. So, I am sure its outpu is empty array"{}"  because that's the value of the "greeting" variable after you assigned it. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i> The Right answer is "12"
 a is assigned the value 1.( Number type)
b is assigned the value "2" (a string).
Then, inside the function, you have the expression a + b. JavaScript will try to perform addition, but when you try to add a number and a string, JavaScript will perform type coercion and convert the number to a string and concatenate them together.

So, 1 + "2" results in "12" (a string concatenation, not numeric addition).

Therefore, the output of sum(1, "2") is "12", which is a string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Right Answer is A: `['🍕', '🍫', '🥑', '🍔']`

const food = ["🍕", "🍫", "🥑", "🍔"];: This line declares a constant array named food containing four items.

const info = { favoriteFood: food[0] };: Here,create an object info with a property favoriteFood, and  initialize it with the first element of the food array, which is "🍕". So, info.favoriteFood initially holds the value "🍕".

info.favoriteFood = "🍝";: This line reassigns the favoriteFood property of the info object with the value "🍝". So, now info.favoriteFood contains "🍝" instead of "🍕".

console.log(food);: Finally,  log the food array to the console.

Before  logged the food array,  only modified the info object by changing the value of info.favoriteFood.  didn't directly modify the food array. Therefore, the food array remains unchanged. When  log food, it will output the original array
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>