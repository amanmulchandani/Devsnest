# Day 6

## 1. Write a JavaScript function to check whether an `input` is an array or not
``` javascript
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True
```
### Ans
``` javascript
function is_array(y){ return Array.isArray(y); }

console.log(is_array("w3school"));
console.log(is_array([1,2,3,4]));

```

## 2. Write a JavaScript function to clone an array
``` javascript
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
```
### Ans
``` javascript
function array_clone(y){
  let ans=[]
  for(let i=0;i<y.length;i++){
    ans.push(y[i]);
  }
  return ans;
}
console.log(array_clone([1,2,4,0]));
console.log(array_clone([1,2,[4,0]]));

```

## 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
``` javascript
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
```
### Ans
``` javascript
function first(y,n=0){
  if(n<0){
    return [];
  }
  if(n===0){
    return y[0];
  }
  else{
    return y.slice(0,n);
  }
}

console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6));
console.log(first([7,9,0,-2],-3));
```

## 4. Write a simple JavaScript program to join all elements of the following array into a string.
``` javascript
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
 Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
```
### Ans
``` javascript
 myColor = ["Red", "Green", "White", "Black"];
 let m = myColor.join(",");
 m.toString();
 console.log(m);
```

## 5. Write a JavaScript program to find the most frequent item of an array
``` javascript
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

```
### Ans
``` javascript
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

 arr1.sort();
 var count=1;
 var newcount;
 var precount=1;
 var ans;
 for(i=0;i<arr1.length;i++){
   if(arr1[i]==arr1[i+1]){
     count++;
   }
   else{
     newcount=count;
     count=1;
     if(newcount>precount){
       ans=arr1[i];
       precount=newcount;
      
     }
   }
 }
 
 console.log(ans)
```