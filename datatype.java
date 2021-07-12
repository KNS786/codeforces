import java.io.*;
public class Data{
	 public static void main(String[] args){
		 Scanner in=new Scanner(System.in);
		 int i=4;
		 double d=92.2;
		 String s="Hackerrank";
		 int m=in.nextInt();
		 double dd=in.nextDouble();
		 in.nextLine();
		 System.out.println(i+m);
		 System.out.println(d+dd);
		 System.out.println(s+in.nextLine());
		 in.close();
	 }
}
