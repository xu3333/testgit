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

import java.io.Console;

@Controller
public class RegisterController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "/api/registe")
    @ResponseBody
    public Result registe(@RequestBody User user){
        String username=user.getUsername();
        username= HtmlUtils.htmlEscape(username);
        User user1=userService.get(username,user.getPassword());
        System.out.println(username);
        System.out.println(user.getPassword());
        if(null==user1){
            userService.add(user);
            return new Result(200);
        }else {
            return new Result(400);
        }
    }
}
