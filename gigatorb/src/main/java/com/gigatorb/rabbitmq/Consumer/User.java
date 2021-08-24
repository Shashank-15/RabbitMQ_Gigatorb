package com.gigatorb.rabbitmq.Consumer;
import com.gigatorb.rabbitmq.Config.MessagingConfig;
import com.gigatorb.rabbitmq.Dto.OrderStatus;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;



@Component
public class User {

    @RabbitListener(queues = MessagingConfig.QUEUE)
    public void consumeMessagefromQueue(OrderStatus orderStatus )  {
         System.out.println("Message received from Queue: " +orderStatus);


    }

}

