#include <bits/stdc++.h>
using namespace std;

#define debug(x) cout<<#x<<" is "<<endl
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);


using ll = long long;

#define x first
#define y second

template <typename T>
struct ColorD{

	int node,edge;
	vector< vector< pair<int,T> > > adj;
	vector< T > level;
	vector<int> parent;

	ColorD(int _node, int _edge) : node(_node), edge(_edge) {
		vector<int>(node+1).swap(parent);
		vector<T>(node+1, numeric_limits<T>::max()).swap(level);
		vector< vector< pair<int,T> > > (node+1).swap(adj);
	}

	void add_edge(int u, int v, T w) {
		adj[u].push_back({v,w});
		adj[v].push_back({u,w});
	}

	void traverse(int src) {

		level[src] = 0;
		set< pair<T,int> > s {{0,src}};
		parent[src] = -1;

		while(!s.empty()) {
			auto it = *s.begin();
			int cur_node = it.y;
			T cur_level = it.x;
			s.erase(s.begin());

			for(auto u : adj[cur_node]) {
				if(level[u.x] - u.y > cur_level) {
					level[u.x] = cur_level + u.y;
					parent[u.x] = cur_node; 
					s.insert({level[u.x],u.x});
				}
			}
		}
	}

	void print_path(int x) {

		if(level[x] == numeric_limits<T>::max()) {
			cout<<"-1\n";
			return;
		}

		if(x == -1){
			return;
		}

		print_path(parent[x]);
		cout<<x<<" ";

	}

};


int main(int argc, char const *argv[])
{
	FASTIO;
	cin.tie(nullptr);


	int node,edge;
	cin>>node>>edge;

	ColorD<ll> d(node,edge);


	while(edge--){
		int x,y;
		ll w;
		cin>>x>>y>>w;
		d.add_edge(x,y,w);
	}

	d.traverse(1);
	d.print_path(node);

	return 0;
}