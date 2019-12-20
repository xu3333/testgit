package work.firstwork.result;

public class Result {
    private int code;
    private String role;

    public Result(int code,String role) {
        this.code = code;
        this.role=role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
