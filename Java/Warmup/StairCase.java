import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class StairCase {
    // Input 6
    // Output
    //     #
    //    ##
    //   ###
    //  ####
    // #####
    //######
    static void staircase(int n) {
        for(int index = 1;index<=n;index++){
            String blankSpaces = "";
            String hashTags = "";
            for(int b = 1;b<=n-index;b++){
                blankSpaces+= " "; 
            }
            for(int h = 1;h<=index;h++){
                hashTags+="#";
            }
            System.out.println(blankSpaces + hashTags);
        }
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        staircase(n);

        scanner.close();
    }
}
