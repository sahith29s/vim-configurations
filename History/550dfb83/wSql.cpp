// #include <iostream>
// using namespace std;

// int main()
// {
//     // if (2 < 10)
//     // {
//     //     cout << "sahith";
//     // }
//     // if("sahith"){
//     //     cout<<"sahith";
//     // }

//     int a;
//     cout << "Enter a number : ";
//     cin >> a;
//     if (a < 0)
//     {
//         cout << "A is negaveite" << endl;
//     }
//     else if (a > 0)
//     {
//         cout << "A is positive" << endl;
//     }
//     else
//     {
//         cout << "A is zero" << endl;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     // int i = 1;
//     // while (i <= n)
//     // {

//     //     int j = 1;
//     //     while (j <= n)
//     //     {
//     //         cout << i;
//     //         j++;
//     //     }
//     //     i++;
//     //     cout << endl;
//     // }
//     int i = 1;
//     while (i <= n){
//         i++;
//         int j = n;
//         while (j >= 1)
//         {
//             cout<<j;
//             j--;
//         }
//         cout<<endl;

//     }
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     int printNumber = 1;
//     while (i <= n)
//     {
//         i++;
//         int j = 1;
//         while (j <= n)
//         {
//             cout << printNumber;
//             printNumber++;
//             j++;
//         }
//         cout << endl;
//     }
//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     while (i <= n)
//     {
//         int j = i;
//         // int printNumber = i;
//         while (j >= 1)
//         {
//             cout << j;

//             j--;
//         }
//         cout << endl;
//         i++;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     while (i <= n)
//     {
//         char ch = 'A' + i - 1;
//         int j = 1;
//         while (j <= n)
//         {
//             cout << ch;
//             ch = ch + 1;
//             j++;
//         }
//         cout << endl;
//         i++;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     int updateNumber = 0;
//     while (i <= n)
//     {
//         int j = 1;
//         // char ch = 'A' + i - 1;

//         while (j <= i)
//         {
//             cout << char('A' + i + j - 2);
//             j++;
//             updateNumber++;
//         }
//         i++;
//         cout<<endl;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         char ch = ('A' + n - i);
//         while (j <= i)
//         {
//             cout << ch;
//             ch++;
//             j++;
//         }
//         cout << endl;
//         i++;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         while (j <= n)
//         {
//             if ((n - j - i  )  > 0)
//             {
//                 cout<<" ";
//             }
//             else{
//                 cout<<"*";
//             }
//             j++;
//         }
//         cout << endl;
//         i++;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         int number = 0;
//         while (j <= n)
//         {
//             if ((i - j) > 0)
//             {
//                 cout << " ";
//             }
//             else
//             {
//                 cout << (i + number);
//                 number++;
//             }
//             j++;
//         }
//         cout << endl;
//         i++;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         int numberToBePrinted = 1;
//         int numbercheck = false;
//         while (j <= (2 * (n - 1) + 1))
//         {
//             if ((n - i - j + 1) > 0)
//             {
//                 cout << " ";
//             }
//             else
//             {
//                 cout << numberToBePrinted;

//                 if (numbercheck)
//                 {
//                     numberToBePrinted--;
//                 }

//                 else if (numberToBePrinted < i)
//                 {
//                     numberToBePrinted++;
//                     if (numberToBePrinted == i)
//                     {
//                         numbercheck = true;
//                     }
//                 }
//             }

//             j++;
//         }
//         cout << endl;
//         i++;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         int numberToBePrinted = 1;
//         while ( ((2 * n) - 1) >= j)
//         {
//             if ((n - i - j) >= 0 || (n + i - j) <= 0)
//             {
//                 cout << " ";
//             }
//             else {
//                 cout << ((j >= n) ? numberToBePrinted-- : numberToBePrinted++);
//             }
//             j++;
//         }
//         i++;
//         cout << endl;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int i = 1;
//     while (i <= n)
//     {
//         // printing first numbers
//         int row1 = 1;
//         while (row1 <= n - i + 1)
//         {
//             cout << row1;
//             row1++;
//         }

//         // printing starts
//         int row2 = 1;
//         while (row2 <= (2 * (i - 1)))
//         {
//             cout << "*";
//             row2++;
//         }

//         // printing last numbers
//         int row3 = n - i + 1;
//         while (row3 >= 1)
//         {
//             cout << row3;
//             row3--;
//         }

//         cout << endl;

//         i++;
//     }
//     return 0;
// }

// #include <iostream>
// using namespace std;
//
// int main()
// {
//     int a = 4;
//     int b = 6;
//     cout << (a & b) << endl;
//     cout << (a | b) << endl;
//     cout << ( ~a) << endl;
//     cout << (a ^ b) << endl;
//
//     return 0;
// }

// #include <iostream>
// using namespace std;
// #include <cmath>

// int main()
// {
//     bool isPrime = true;

//     int n;
//     cin >> n;
//     for (int i = 2; i < sqrt(n); i++)
//     {
//         if (n % i == 0)
//         {
//             // cout << "it is not prime";
//             isPrime = !isPrime;
//             break;
//         }
//     }

//     cout << (isPrime ? "Yes" : "Not a prime");

//     return 0;
// }

// #include <iostream>
// using namespace std;
// #include <string>

// int main()
// {

// int x = -123, newNumber = 0;
// bool isNegative = false;
// if (x < 0)
// {
//     x = x * (-1);
//     isNegative = true;
// }

// int lengthOfInt = to_string(x).length();

// for (int i = 0; i < lengthOfInt; i++)
// {
//     newNumber = (newNumber * 10) + (x % 10);
//     x = x / 10;
// }
// cout << (isNegative ? (newNumber * (-1)) : newNumber);

// int x = -145;
// int ans = 0;
// while (x != 0) {
//     int digit = x % 10;
//     if ((ans > INT32_MAX / 10) || (ans < INT32_MIN / 10))
//     {
//         return 0;
//     }
//     ans = (ans * 10) + digit;
//     x = x / 10;
// }
// cout << ans ;

// int x = 7;
// int com = 0;

// while (x != 0)
// {
//     if((x % 2) == 1 )
//     {
//         com++;
//     }

//     x = x / 2;
// }
// cout << com;

// #include <iostream>
// using namespace std;
//
// int main()
// {
//
//     int n = 11;
//     while (n > 1)
//     {
//         if ((n % 2) == 1)
//         {
//             cout <<  "yes" << endl;
//             break;
//         }
//     }
//     cout <<  "No " << endl;
//
//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     char name = 'd';
//     switch (name)
//     {
//     case 'a':
//         cout << "This is a" << endl;
//         break;
//     case 'd':
//         cout << "this is md vim" << endl;

//     default:
//         break;
//     }
//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {

//     int a, b;
//     int oper;

//     cout << "Enter first  number" << endl;
//     cin >> a;

//     cout << "Enter second number" << endl;
//     cin >> b;

//     cout << endl;
//     cout << "Enter 1 to add " << endl;
//     cout << "Enter 2 to subtract" << endl;
//     cout << "Enter 3 to mul" << endl;
//     cout << "Enter 4 to div" << endl;
//     cout << endl;

//     cout << "Enter enter operator" << endl;
//     cin >> oper;

//     switch (2)
//     {
//     case 1:
//         cout << (a + b) << endl;
//         break;
//     case 2:
//         cout << (a - b)<< endl;
//         break;
//     case 3:
//         cout << (a * b)<< endl;
//         break;
//     case 4:
//         cout << (a / b)<< endl;
//         break;

//     default:
//         break;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int totalMoney = 1330;
//     int note100 = 0, note50 = 0, note20 = 0, note1 = 0;
//     while (totalMoney > 0)
//     {
//         if ((totalMoney >= 100))
//         {
//             note100 = totalMoney / 100;
//             totalMoney = totalMoney - ((totalMoney / 100) * 100);
//         }
//         else if ((totalMoney >= 50)) {
//             note50++;
//             totalMoney = totalMoney - 50;
//         }
//         else if ((totalMoney >= 20))
//         {
//             note20++;
//             totalMoney = totalMoney - 20;
//         }
//         else if ((totalMoney > 1))
//         {
//             note1 = totalMoney;
//             totalMoney = 0;
//         }
//     }

//     cout << note100 << endl;
//     cout << note50 << endl;
//     cout << note20 << endl;
//     cout << note1 << endl;

//     return 0;
// }

// #include <iostream>
// #include <math.h>
// using namespace std;

// int ncr(int n, int r)
// {
//     int nFac = 1, rFAc = 1, nMrFac = 1;
//     for (int i = 1; i <= n; i++)
//     {
//         nFac *= i;

//         if (i == r)
//         {
//             rFAc = nFac;
//             cout << "rfac" << rFAc << endl;
//         }

//         if (i == (n - r))
//         {
//             nMrFac = nFac;
//             cout << "nmr fac" << nMrFac << endl;
//         }
//     }

//     return (nFac / (rFAc * nMrFac));
// }

// int power(int a, int b)
// {
//     return 10;
//     const int mana = 10;
// }

// int main()
// {
//     cout << ncr(6, 3) << endl;
//     return 0;
// }

// #include <iostream>
// #include <vector>
// #define Z 50
// using namespace std;

// vector<int> insertAtEnd(vector<int> arr, int e)
// {
//     arr.push_back(e);
//     return arr;
// }

// int main()
// {

//     vector<int> arr = {10, 20, 40};
//     // cout << arr[2] << endl;
//     insertAtEnd( arr, 50);
//     // arr.push_back(40);
//     cout<< arr[3] <<endl;

//     return 0;
// }

#include <iostream>
using namespace std;

int main(){
    // int arr[10] = {};
    // int n = 14;
    // for (int i = 0; i < n; i++)
    // {
    //     cout<< arr[i] <<endl;
    // }
    cout<< ('A' + 1) <<endl;

    
    return 0;
}