import java.util.LinkedHashSet;
import java.util.Set;

/**
 * Pra
 */
public class Pra {

    public static void main(String[] args) {
        // GCD
        // System.out.println(findGCD(4, 5));

        // // prime number
        // System.out.println(isPrimeNumber(2));

        // // LCM
        // System.out.println(lcm(4, 5));

        // // palinrome number
        // System.out.println(palindromeNumber(38));

        // // palindrome striing
        // System.out.println(palindromeString("null"));

        // // merge two array 
        // mergeArray();

        // // duplicate letters 
        // System.out.println(removeDuplicateLetters("banana"));

        triangle();
    }

    // GCD
    public static int findGCD(int a, int b) {
        // Ensure the values are non-negative
        a = Math.abs(a);
        b = Math.abs(b);
        
        // Implement Euclidean algorithm
        while (b!= 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Prime Numbers
    public static String isPrimeNumber(int n){

        if (n < 2) {
            return n+ " is not a prime number";
        }
        for (int i = 2; i > n; i++) {
            if (n % i == 0) {
                return n+ " is not a prime number";
            }
        }
        return n + " is a prime number";
    }

    // LCM
    public static int lcm(int a, int b) {
        return (a * b) / findGCD(a, b);
    }

    // palindrome number 
    public static int palindromeNumber(int n){
        int reversedNumber = 0;
        while (n > 0) {
            int digit = n % 10;
            reversedNumber = reversedNumber * 10 + digit;
            n = n / 10;
        }
        return reversedNumber;
    }

    // palindrome string

    public static boolean palindromeString(String s){
        String og = s;
        String rev = "";
        for (int i = s.length()-1; i >= 0; i--) {
            rev = rev + s.charAt(i);
        }
        return rev.equals(og);
    }

    // merge two array
    public static void mergeArray(){
        int [] a = {1,2};
        int[]  b = {4,6,4,56};
        int[] c = new int[a.length + b.length];
        int b_length = 0;
        for (int i = 0; i < a.length; i++) {
            c[i] = a[i];
        }
        for (int i = a.length; i < c.length; i++) {
            c[i] = b[b_length];
            b_length++;
        }
        System.out.println(c[5]);
    }

    
    public static String removeDuplicateLetters(String input) {
        // Using LinkedHashSet to maintain insertion order and remove duplicates
        Set<Character> charSet = new LinkedHashSet<Character>();
        for (char c : input.toCharArray()) {
            charSet.add(c);
        }
    
        // Building the resultant string
        StringBuilder result = new StringBuilder();
        for (char c : charSet) {
            result.append(c);
        }
    
        return result.toString();
    }
    public static void triangle(){
        for (int i = 4; i > 0; i--) {
            for (int j = i; j > 0; j--) {
                
                System.out.print(" * ");
            }
            System.out.println();
        }
    }
    
}