#include<iostream>
using namespace std;

bool isPrime(int n){
	if(n==1){
		return false;
	}
	else if(n==2){
		return true;
	}else{
		for(int i=2;i<n;i++){
			if(n%i==0){
				return false;
			}
		}
		return true;
	}
}
int main(){
	int t;
    cin>>t;
	int n;
	  for(int j=0;j<t;j++){
		 cin>>n;
		 if(isPrime(n)){
			 cout<<"YES"<<"\n";
		 }
		 else{
			 cout<<"NO"<<"\n";
		 }
	  }
	  return 0;
}
		