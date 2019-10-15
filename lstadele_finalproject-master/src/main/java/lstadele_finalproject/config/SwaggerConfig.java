package lstadele_finalproject.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Collections;

/**
 * this class is the Swagger config class
 * @author  Laura Stadele
 * @version 1.0
 * @since   2019-10-10
 */

@EnableSwagger2
@Configuration
public class SwaggerConfig {
    private static final String SWAGGER_API_VERSION = "1.0";
    private static final String LICENSE_TEXT = "License";
    private static final String title = "Laura Stadele Health Final Project";
    private static final String description = "This is an API for the Super Health Inc. final project ";

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(title)
                .description(description)
                .license(LICENSE_TEXT)
                .version(SWAGGER_API_VERSION)
                .build();
    }

    @Bean
    public Docket usersAPI() {
        return new Docket(DocumentationType.SWAGGER_2)
//                .globalOperationParameters(
//                        new ArrayList<>(Collections.singleton(new ParameterBuilder()
//                                .name("Authorization")
//                                .description("Bearer Authentication token")
//                                .modelRef(new ModelRef("string"))
//                                .parameterType("header")
//                                .required(false)
//                                .build()))
//                )
                .apiInfo(apiInfo())
                .pathMapping("/")
                .select()
                .apis(RequestHandlerSelectors.basePackage("lstadele_finalproject"))
                .build();
    }
}
