package com.foodsafe.supplierquery.config;

import com.foodsafe.supplierquery.entity.Supplier;
import com.foodsafe.supplierquery.repository.SupplierRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner loadData(SupplierRepository repository) {

        return args -> {

            if (repository.count() == 0) {

                repository.save(new Supplier(
                        "FreshFarm Foods",
                        "Vegetables & Produce",
                        "Hyderabad",
                        "Ravi Kumar",
                        "ravi@freshfarm.com"
                ));

                repository.save(new Supplier(
                        "GreenHarvest",
                        "Ingredients",
                        "Bengaluru",
                        "Anita Rao",
                        "anita@greenharvest.com"
                ));

                repository.save(new Supplier(
                        "SafeBake Ltd",
                        "Bakery",
                        "Chennai",
                        "Arjun Singh",
                        "arjun@safebake.com"
                ));

                repository.save(new Supplier(
                        "NutriSource",
                        "Food Additives",
                        "Mumbai",
                        "Priya Shah",
                        "priya@nutrisource.com"
                ));

                repository.save(new Supplier(
                        "PureGrain Suppliers",
                        "Grains",
                        "Pune",
                        "Rahul Mehta",
                        "rahul@puregrain.com"
                ));
            }
        };
    }
}
