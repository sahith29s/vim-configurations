import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Scanner;
public class sahith {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int totalMarks = 100;

        System.out.print("Enter your 1 subject marks: ");
        int marks1 = sc.nextInt();

        System.out.print("Enter your 2 subject marks: ");
        int marks2 = sc.nextInt();

        System.out.print("Enter your 3 subject marks: ");
        int marks3 = sc.nextInt();

        System.out.print("Enter your 4 subject marks: ");
        int marks4 = sc.nextInt();

        System.out.print("Enter your 5 subject marks: ");
        int marks5 = sc.nextInt();

        Integer sum = ((marks1 + marks2 + marks3 + marks4 + marks5)/(totalMarks * 5));
        

        System.out.println(sum * 100);

        
    }
}
