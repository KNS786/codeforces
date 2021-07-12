#include<iostream>
using namespace std;
int main(){
    int t;
      cin>>t;
      while(t--){
          long long int n;
          cin>>n;
          long long unsigned int total=1;
          for(long long unsigned int i=n;i>=1;i--)
            total*=i;
           
          cout<<total<<"\n";
          
          }
      
      return 0;
}