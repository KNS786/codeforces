function TwocommonSubString(s1,s2)
{
	 return (s1.split('').map(l => s2.includes(l)).filter(v => !!v).length) ? 'YES': 'NO';
}
