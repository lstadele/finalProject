package lstadele_finalproject.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lstadele_finalproject.entities.Patient;
import lstadele_finalproject.exceptions.ExceptionResponse;
import lstadele_finalproject.interfaces.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * this class is the Controller class for the Patient domain
 *
 * @author Laura Stadele
 * @version 1.0
 * @since 2019-10-11
 */
@RestController
@RequestMapping(value = "/patients")
@Api(value = "Patient domain", produces="Provides all necessary CRUD operations for the Patient Domain")
public class PatientController {

    public List<Patient> patientList = new ArrayList<>();

    @Autowired
    private IPatientService patientService;

    /**
     * this method is for getting all patients from the database
     * @return it returns a list of all patients in the database
     */
    @GetMapping
    @ApiOperation("Gets all Patients in the system")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", responseContainer = "List", response = Patient.class),
            @ApiResponse(code = 404, message = "Not found", response = ExceptionResponse.class),
            @ApiResponse(code = 500, message = "Internal error", response = ExceptionResponse.class)
    })
    public ResponseEntity<List<Patient>> getAllPatients() {
        return new ResponseEntity<>(patientService.getAllPatients(), HttpStatus.OK);
    }

    /**
     * this method is for getting a patient by id from the database
     * @param patientId the parameter going in will be the patient id needed
     * @return it will return a patient with a specific id
     */
    @GetMapping(value="/{patientId}")
    @ApiOperation("Gets a Patient by ID from the system")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = Patient.class),
            @ApiResponse(code = 404, message = "Not Found", response = ExceptionResponse.class),
            @ApiResponse(code = 500, message = "Internal error",response = ExceptionResponse.class)})
    public ResponseEntity<Optional<Patient>> getPatientById(@PathVariable Long patientId) {
        return new ResponseEntity<>(patientService.getPatientById(patientId), HttpStatus.OK);
    }

    /**
     * this method is for adding a new patient to the database
     * @param patient the parameter going in will be the new patient information
     *                a new patient will be added upon completion
     */
    @PostMapping
    @ApiOperation("Posts a new Patient to the system.")
    @ApiResponses(value = { @ApiResponse(code = 201, message = "Created"),
            @ApiResponse(code = 400, message = "Bad Request", response = ExceptionResponse.class),
            @ApiResponse(code = 409, message = "Conflict", response = ExceptionResponse.class),
            @ApiResponse(code = 500, message = "Internal error", response = ExceptionResponse.class)})
    public ResponseEntity<Patient> addNewPatient (@RequestBody Patient patient) {
        return new ResponseEntity<>(patientService.addNewPatient(patient), HttpStatus.CREATED);
    }

/**
 * this method will update a patient by id
 *
 * @param patientId this parameter is needed to specify which patient to update
 * @param patient   this parameter will be the updated information you're putting in
 * @return it will return the updated patient in the database
 */
@PutMapping(value = "/{patientId}")
@ApiOperation("Edits/updates a patient in the system by id")
@ApiResponses(value = { @ApiResponse(code = 200, message = "OK"),
        @ApiResponse(code = 400, message = "Bad Request", response = ExceptionResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = ExceptionResponse.class),
        @ApiResponse(code = 409, message = "Conflict", response = ExceptionResponse.class),
        @ApiResponse(code = 500, message = "Internal error", response = ExceptionResponse.class)})
public ResponseEntity<Patient> updatePatient(@PathVariable Long patientId, @RequestBody Patient patient) {
    return new ResponseEntity<>(patientService.updatePatient(patientId, patient), HttpStatus.OK);
}

/**
 * this method will delete a patient from the database
 *
 * @param patientId this parameter will specify which patient to delete based on id
 *whatever patient you specify will be deleted upon completion
 */
@DeleteMapping(value="/{patientId}")
@ApiOperation("Deletes a purchase in the system by id.")
    @ApiResponses(value = { @ApiResponse(code = 204, message = "No Content"),
            @ApiResponse(code = 400, message = "Bad Request", response = ExceptionResponse.class),
            @ApiResponse(code = 404, message = "Not Found", response = ExceptionResponse.class),
            @ApiResponse(code = 500, message = "Internal error", response = ExceptionResponse.class)})
public void deletePatient(@PathVariable Long patientId) {
    patientService.deletePatient(patientId);
}
}
