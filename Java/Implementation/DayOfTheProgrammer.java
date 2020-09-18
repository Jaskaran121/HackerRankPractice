import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class DayOfTheProgrammer {
    static boolean isJuLianLeapYear(int year){
        return year%4 == 0;
    }
    static boolean isGregorianLeapYear(int year){
        if(year%100 == 0 && year%400 !=0)
            return false;
        return year%4 == 0;
    }
    static String dayOfProgrammer(int year) {
        int leapYearDate;
        if(year == 1918)
            return "26.09.1918";
        if(year<1918){
            leapYearDate = isJuLianLeapYear(year) ? 12 : 13;
        }else{
            leapYearDate = isGregorianLeapYear(year) ? 12 : 13;
        }
        return leapYearDate + ".09." + year;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int year = Integer.parseInt(bufferedReader.readLine().trim());

        String result = dayOfProgrammer(year);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
