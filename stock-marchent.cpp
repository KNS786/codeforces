#include<bits/stdc++.h>
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0)
using namespace std;
int main(){
    FASTIO;
    int count=0;
    int n;
    cin>>n;
    int arr[n];
     for(int i=0;i<n;i++)cin>>arr[i];
    sort(arr,arr+n);
     
       for(int i=0;i<n-1;i++){
           if(arr[i]==arr[i+1]){
               ++count;
               i+=1;
           }
       }
   cout<<count;
   return 0;

}
