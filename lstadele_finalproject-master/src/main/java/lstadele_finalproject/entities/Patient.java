package lstadele_finalproject.entities;

import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import static lstadele_finalproject.constants.StringConstants.REQUIRED_FIELD;

/**
 * this class is the entity class for the Patient domain
 *
 * @author Laura Stadele
 * @version 1.0
 * @since 2019-10-10
 */

@Entity
@Table(name = "patients")
public class Patient {

    /**
     * Unique identifier for the Patient auto generates the id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "Auto-generated ID for patient record")
    private Long patientId;

    /**
     * String that holds the first name of the Patient
     */
    @NotBlank(message = "Patient First Name" + REQUIRED_FIELD)
    @ApiModelProperty(value = "The First Name of the Patient being registered", example = "John")
    private String patientFirstName;

    /**
     * String that holds the last name of the Patient
     */
    @NotBlank(message = "Patient Last Name" + REQUIRED_FIELD)
    @ApiModelProperty(value = "The Last Name of the Patient being registered", example = "Doe")
    private String patientLastName;

    /**
     * String that holds the Social Security Number of a Patient
     */
    @NotBlank(message = "Patient Social Security Number" + REQUIRED_FIELD)
    @Pattern(regexp = "^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$")
    @ApiModelProperty(value = "The Social Security Number of the Patient being registered", example = "123-45-6789")
    private String patientSSN;

    /**
     * Embedded entity that holds the Patient's address information
     */
    @NotNull(message = "Patient Address" + REQUIRED_FIELD)
    @ApiModelProperty(value = "Address of the Patient being registered")
    @Valid
    private Address address;

    /**
     * Integer that holds the age of the Patient
     */
    @NotNull(message = "Patient Age" + REQUIRED_FIELD)
   //@Pattern(regexp = "^[1-9][0-9]?$")
    @ApiModelProperty(value = "Age of the Patient being registered", example="32")
    private Integer patientAge;

    /**
     * Integer that holds the height of a Patient in inches
     */
    @NotNull(message= "Patient Height" + REQUIRED_FIELD)
    //@Pattern(regexp =  "^[0-9]*$")
    @ApiModelProperty(value = "Height of the Patient in inches", example="72")
    private Integer patientHeight;

    /**
     * Integer that holds the weight of a patient in pounds
     */
    @NotNull(message= "Patient Weight" + REQUIRED_FIELD)
   // @Pattern(regexp =  "^([1-9]\d{0,2})$")
    @ApiModelProperty(value = "Weight of the Patient in pounds", example="170")
    private Integer patientWeight;

    /**
     * String that holds the Insurance Info for a Patient
     */
    @NotBlank(message = "Patient Insurance" + REQUIRED_FIELD)
    @ApiModelProperty(value = "Insurance information for the Patient", example="Kaiser")
    private String patientInsurance;

    /**
     * String that holds the sex of the Patient
     */
    @NotBlank(message = "Patient Sex" + REQUIRED_FIELD)
    @ApiModelProperty(value = "Sex of the Patient being registered", example="Female")
    private String patientSex;

    /**
     * Empty constructor for the Patient entity
     */
    public Patient() {
    }

    /**
     * full constructor for the Patient entity, all fields are part of the Patient Information
     */
    public Patient(@NotBlank(message = "Patient First Name" + REQUIRED_FIELD) String patientFirstName, @NotBlank(message = "Patient Last Name" + REQUIRED_FIELD) String patientLastName, @NotBlank(message = "Patient Social Security Number" + REQUIRED_FIELD) @Pattern(regexp = "^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$") String patientSSN, @NotNull(message = "Patient Address" + REQUIRED_FIELD) @Valid Address address, @NotNull(message = "Patient Age" + REQUIRED_FIELD) @Pattern(regexp = "^[0-9]*$") Integer patientAge, @NotNull(message = "Patient Height" + REQUIRED_FIELD) @Pattern(regexp = "^[0-9]*$") Integer patientHeight, @NotNull(message = "Patient Weight" + REQUIRED_FIELD) @Pattern(regexp = "^[0-9]*$") Integer patientWeight, @NotBlank(message = "Patient Insurance" + REQUIRED_FIELD) String patientInsurance, @NotBlank(message = "Patient Sex" + REQUIRED_FIELD) String patientSex) {
        this.patientFirstName = patientFirstName;
        this.patientLastName = patientLastName;
        this.patientSSN = patientSSN;
        this.address = address;
        this.patientAge = patientAge;
        this.patientHeight = patientHeight;
        this.patientWeight = patientWeight;
        this.patientInsurance = patientInsurance;
        this.patientSex = patientSex;
    }

    /**
     * Getters and Setters for all fields of the Patient Entity
     */
    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public String getPatientFirstName() {
        return patientFirstName;
    }

    public void setPatientFirstName(String patientFirstName) {
        this.patientFirstName = patientFirstName;
    }

    public String getPatientLastName() {
        return patientLastName;
    }

    public void setPatientLastName(String patientLastName) {
        this.patientLastName = patientLastName;
    }

    public String getPatientSSN() {
        return patientSSN;
    }

    public void setPatientSSN(String patientSSN) {
        this.patientSSN = patientSSN;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Integer getPatientAge() {
        return patientAge;
    }

    public void setPatientAge(Integer patientAge) {
        this.patientAge = patientAge;
    }

    public Integer getPatientHeight() {
        return patientHeight;
    }

    public void setPatientHeight(Integer patientHeight) {
        this.patientHeight = patientHeight;
    }

    public Integer getPatientWeight() {
        return patientWeight;
    }

    public void setPatientWeight(Integer patientWeight) {
        this.patientWeight = patientWeight;
    }

    public String getPatientInsurance() {
        return patientInsurance;
    }

    public void setPatientInsurance(String patientInsurance) {
        this.patientInsurance = patientInsurance;
    }

    public String getPatientSex() {
        return patientSex;
    }

    public void setPatientSex(String patientSex) {
        this.patientSex = patientSex;
    }

    /**
     * toString method for the Patient entity
     */
    @Override
    public String toString() {
        return "Patient{" +
                "patientId=" + patientId +
                ", patientFirstName='" + patientFirstName + '\'' +
                ", patientLastName='" + patientLastName + '\'' +
                ", patientSSN='" + patientSSN + '\'' +
                ", patientAddress=" + address +
                ", patientAge=" + patientAge +
                ", patientHeight=" + patientHeight +
                ", patientWeight=" + patientWeight +
                ", patientInsurance='" + patientInsurance + '\'' +
                ", patientSex='" + patientSex + '\'' +
                '}';
    }
}
