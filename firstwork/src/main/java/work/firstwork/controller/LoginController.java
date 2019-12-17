package work.firstwork.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.HtmlUtils;
import work.firstwork.pojo.User;
import work.firstwork.result.Result;
import work.firstwork.service.UserService;

import java.util.Objects;

@Controller
public class LoginController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "api/login")
    @ResponseBody
    public Result login(@RequestBody User requestUser){
        // 对 html 标签进行转义，防止 XSS 攻击
        String username=requestUser.getUsername();
        username= HtmlUtils.htmlEscape(username);

        User user=userService.get(username,requestUser.getPassword());
        if(null==user){
            System.out.println("test");
            return new Result(400);
        }else{
            return new Result(200);
        }
    }
}
