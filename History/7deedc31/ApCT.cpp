// #include <iostream>
// using namespace std;


// bool binarySearch(int *arr, int s, int e, int k)
// {

//     // base case

//     // element not found
//     if (s > e)
//         return false;

//     int mid = s + (e - s) / 2;

//     // element found
//     if (arr[mid] == k)
//         return true;

//     if (arr[mid] < k)
//     {
//         return binarySearch(arr, mid + 1, e, k);
//     }
//     else
//     {
//         return binarySearch(arr, s, mid - 1, k);
//     }
// }

// int main()
// {

//     int arr[11] = {2, 4, 6, 10, 14, 18, 22, 38, 49, 55, 222};
//     int size = 11;
//     int key = 222;

//     cout << "Present or not " << binarySearch(arr, 0, size - 1, key) << endl;

//     return 0;
// }


#include<iostream>
using namespace std;

int power(int a, int b) {
    //base case
    if( b == 0 )
        return 1;

    if(b == 1)
        return a;

    //RECURSIVE CALL
    int ans = power(a, b/2);

    //if b is even
    if(b%2 == 0) {
        return ans * ans;
    }
    else {
        //if b is odd
        return a * ans * ans;
    }
}

#include <istream>
using namespace std;

int main()
{
    int *arr = new int();
    bool yesOrNo = true;

    int index = 0;
    while (yesOrNo)
    {
        int input;
        cout << "Enter the number : ";
        cin >> input;
        arr[index] = input;
        index++;
        char str;
        cout << "Do you want to enter any other number: ";
        cin >> str;
        yesOrNo = (str == 'y') ? true : false;
    }
    int sum = 0;
    for (int i = 0; i < index; i++)
    {
        sum = sum + arr[i];
    }
    cout << sum << endl;
    return 0;
}

int main() {

    int a,b;
    cin >> a >> b;
    cout << endl;
    int ans = power(a,b);

    cout << "Answer is " << ans << endl;

    return 0;
}