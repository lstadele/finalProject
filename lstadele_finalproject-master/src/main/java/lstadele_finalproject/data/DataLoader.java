package lstadele_finalproject.data;

import lstadele_finalproject.entities.*;
import lstadele_finalproject.interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * this class is the DataLoader class for this entire project
 *
 * @author Laura Stadele
 * @version 1.0
 * @since 2019-10-11
 */
@Component
public class DataLoader implements CommandLineRunner {
    @Autowired private IPatientRepo patientRepo;
    @Autowired private PatientDao patientDao;

    @Override
    public void run(String... args) throws Exception {
        loadPatients();
    }

    private void loadPatients(){
        Address addressOne = new Address("123 Address St.", "Littleton", "CO", "80128");
        Patient patientOne= patientRepo.save(new Patient("Laura", "Stadele", "123-45-6789", addressOne, 25, 68, 180, "Kaiser", "Female"));

        Address addressTwo = new Address("12 West St.", "Westminster", "CO", "80303");
        Patient patientTwo= patientRepo.save(new Patient("Emma", "Stadele", "121-23-4567", addressTwo, 28, 70, 120, "Kaiser", "Female"));

        Address addressThree = new Address("141 E. Garnet Ave.", "Granby", "CO", "80446");
        Patient patientThree= patientRepo.save(new Patient("Julia", "Stadele", "133-12-1234", addressThree, 30, 65, 190, "Cigna", "Female"));

        Address addressFour = new Address("3 Sundown Trail", "Nederland", "CO", "80466");
        Patient patientFour= patientRepo.save(new Patient("Lee", "Stadele", "111-22-3333", addressFour, 61, 75, 150, "Cigna", "Male"));

        Address addressFive = new Address("313 Sundance Circle", "Nederland", "CO", "80466");
        Patient patientFive= patientRepo.save(new Patient("Milo", "Otair Von Helmet", "333-33-3333", addressFive, 10, 12, 20, "Blue Cross", "Male"));
    }

}
