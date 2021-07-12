#include<iostream>
using namespace std;
#define ll long long 
int main(){
    ll n=5;
    ll arr[n];
    for(int i =0;i<n;i++) cin>>arr[i];
    
    ll sum=0;
    ll max=arr[0];
    ll min=max;
     sum = min;
     for(int i=1;i<n;i++){
         sum+=arr[i];
          if(max < arr[i]){
              max=arr[i];
          } 
          if(min > arr[i]){
              min=arr[i];
          }
         
     }
     cout<<(sum-max)<<" "<<(sum-min)<<endl;
     return 0;
     
     
    
}