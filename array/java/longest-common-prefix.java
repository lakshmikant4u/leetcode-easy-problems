/**
 * https://leetcode.com/problems/longest-common-prefix/
 * 
 * Run the code with the command below
 * 
 * javac longest-common-prefix.java (compile)
 * java LongestCommonPrefix (run)
 * 
 */

class LongestCommonPrefix {
    public static void main(String[] args) {
        String[] arr = { "flower", "flow", "flight" };
        System.out.println(longestCommonPrefix(arr));
    }

    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0)
            return "";
        int l = strs.length;
        if (l == 1)
            return strs[0];
        String[] strs1 = new String[l / 2];
        String[] strs2 = new String[l - l / 2];
        for (int i = 0; i < l / 2; i++)
            strs1[i] = strs[i];
        for (int i = l / 2; i < l; i++)
            strs2[i - l / 2] = strs[i];
        String s1 = longestCommonPrefix(strs1);
        String s2 = longestCommonPrefix(strs2);
        int i = 0;
        while (i < s1.length() && i < s2.length() && s1.charAt(i) == s2.charAt(i))
            i++;
        return s1.substring(0, i);
    }
}