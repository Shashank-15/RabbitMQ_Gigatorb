package com.gigatorb.rabbitmq.Publisher;

import com.gigatorb.rabbitmq.Config.MessagingConfig;
import com.gigatorb.rabbitmq.Dto.Order;
import com.gigatorb.rabbitmq.Dto.OrderStatus;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.TimeoutException;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/order")
public class OrderPublisher
{
    @Autowired
    private RabbitTemplate template;


    @PostMapping("/{restroName}")
    public  OrderStatus bookOrder(@RequestBody Order order ,@PathVariable String restroName) throws IOException, TimeoutException {
            order.setOrderId(UUID.randomUUID().toString());
            OrderStatus orderStatus = new OrderStatus(order, "PROCESS", "Order placed Successfully  ");
            template.convertAndSend(MessagingConfig.EXCHANGE, MessagingConfig.ROUTEKEY, orderStatus);
            System.out.println(""+MessagingConfig.QUEUE);

             return orderStatus;


    }

}
