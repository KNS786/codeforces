#include<bits/stdc++.h>
using namespace std;

int MOD=1e7;
int main(){
	int test;
	cin>>test;
	for(int i=0;i<test;i++){
		int n;
		cin>>n;
		int ans=0;
		for(int i=0;i<n;i++){
			ans+=StrangeFunction(i);
		}
	}
	
}